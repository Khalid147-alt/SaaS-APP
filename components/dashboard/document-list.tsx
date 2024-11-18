import { FileText, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const documents = [
  {
    id: 1,
    name: "Q4 Financial Report.pdf",
    date: "2024-02-28",
    status: "Processed",
  },
  {
    id: 2,
    name: "Marketing Strategy.docx",
    date: "2024-02-27",
    status: "Processing",
  },
  {
    id: 3,
    name: "Product Roadmap.pdf",
    date: "2024-02-26",
    status: "Processed",
  },
];

export function DocumentList() {
  return (
    <div className="rounded-lg border">
      <div className="p-4">
        <h3 className="font-semibold">Recent Documents</h3>
      </div>
      <div className="divide-y">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between p-4"
          >
            <div className="flex items-center space-x-3">
              <FileText className="h-5 w-5 text-blue-500" />
              <div>
                <p className="font-medium">{doc.name}</p>
                <p className="text-sm text-muted-foreground">{doc.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`text-sm ${
                doc.status === "Processed" ? "text-green-500" : "text-orange-500"
              }`}>
                {doc.status}
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Summary</DropdownMenuItem>
                  <DropdownMenuItem>Download</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}