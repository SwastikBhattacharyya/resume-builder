export function ResumesDashboardFooter() {
  return (
    <footer className="bg-gray-800 px-[5dvw] py-8 md:grid md:grid-cols-2">
      <div className="flex gap-x-2">
        <span className="font-bold">Resume Builder</span>
        <span>&copy; 2026 Resume Builder</span>
      </div>
      <div className="flex flex-col gap-x-4 place-self-start md:flex-row md:place-self-end">
        <button className="cursor-pointer text-left outline-none" type="button">
          Help Center
        </button>
        <button className="cursor-pointer text-left outline-none" type="button">
          Privacy Policy
        </button>
        <button className="cursor-pointer text-left outline-none" type="button">
          Terms of Service
        </button>
      </div>
    </footer>
  );
}
