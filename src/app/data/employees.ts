import { Employee } from '../models/employee.model';

export const EMPLOYEES: Employee[] = Array.from({ length: 200 }, (_, i) => ({
  employeeId: i + 1,
  fullName: `Employee ${i + 1}`
}));
