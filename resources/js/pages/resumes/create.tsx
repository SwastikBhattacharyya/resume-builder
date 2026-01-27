import { useForm } from "@inertiajs/react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Create() {
  const { data, setData, post, errors } = useForm({
    title: "",
  });

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    post("/resumes");
  }

  return (
    <form className="space-x-2" onSubmit={submit}>
      <div>
        <Input
          className="border"
          type="text"
          name="title"
          value={data.title}
          onChange={(e) => setData("title", e.target.value)}
        />
        {errors.title && <div>{errors.title}</div>}
      </div>
      <Button type="submit">Create Resume</Button>
    </form>
  );
}
