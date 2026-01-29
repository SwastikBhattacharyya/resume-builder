import { Link } from "@inertiajs/react";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Resume } from "../../types/resume.type";
import type { ResumesTableData } from "../types/resumes-table.type";

export const resumesTablecolumns: ColumnDef<ResumesTableData>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ getValue }) => {
      const value = getValue<string | Date>();
      const date = new Date(value);

      return new Intl.DateTimeFormat("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(date);
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const resume = row.original;

      return (
        <div className="flex items-center gap-3">
          <Button
            className="cursor-pointer"
            variant="outline"
            size="icon-sm"
            type="button"
            asChild
          >
            <Link href={`resumes/${resume.id}/edit`}>
              <Edit />
            </Link>
          </Button>
          <Button
            className="cursor-pointer"
            variant="destructive"
            size="icon-sm"
            type="button"
          >
            <Trash2 />
          </Button>
        </div>
      );
    },
  },
];

interface TableProps {
  resumes: Resume[];
}

export function ResumesTable({ resumes }: TableProps) {
  const data: ResumesTableData[] = resumes.map((resume) => ({
    id: resume.id,
    title: resume.title,
    createdAt: resume.createdAt,
  }));

  const table = useReactTable({
    data,
    columns: resumesTablecolumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={resumesTablecolumns.length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
