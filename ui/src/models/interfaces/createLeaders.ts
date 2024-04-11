interface CreateLeaders {
  name: string;
  startDate: string;
  endDate: string;
  post: string;
  tasks: Array<Tasks>;
}

interface Tasks {
  name: string;
  description: string;
  date: string;
}

export type { CreateLeaders, Tasks };
