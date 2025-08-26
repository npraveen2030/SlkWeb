import { Employee } from '../models/employee.model';

export const EMPLOYEES: Employee[] = Array.from({ length: 200 }, (_, i) => ({
  employeeId: i + 1,
  fullName: `Employee ${i + 1}`,
  email: `employee${i+1}@slk.com`,
  department: ['HR', 'IT', 'Finance', 'Sales'][i % 4], 
  position: ['Manager', 'Analyst', 'Developer', 'Intern'][i % 4],
  phone: `+91-90000${1000 + i}`
}));
