export const getStatusStyles = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-emerald-50 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-400";
      case "Disabled":
        return "bg-slate-100 text-slate-400";
      case "Deleted":
        return "bg-red-100 text-red-400";
      default:
        return "";
    }
  };
