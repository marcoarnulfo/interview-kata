
import { Status } from "@/types/response.status";

// return the bg color class based on the status
export function getStatusBackground(status: string): string {
    switch (status) {
        case Status.Success:
            return 'bg-green-300';
        case Status.Pending:
            return 'bg-yellow-300';
        case Status.Error:
            return 'bg-red-300';
        default:
            return 'bg-yellow-300';
    }
}
// return the text color class based on the status
export function getStatusText(status: string): string {
    switch (status) {
        case Status.Success:
            return 'Job completed!';
        case Status.Pending:
            return 'Job in progress';
        case Status.Error:
            return 'Service currently unaviable.';
        default:
            return 'Job in progress';
    }
}