


class Employee {
  id: number
  importance: number
  subordinates: number[]
  constructor(id: number, importance: number, subordinates: number[]) {
    this.id = (id === undefined) ? 0 : id;
    this.importance = (importance === undefined) ? 0 : importance;
    this.subordinates = (subordinates === undefined) ? [] : subordinates;
  }
}

export function getImportance(employees: Employee[], id: number): number {

  const importances = new Map<number, {
    importance: number,
    sub: number[]
  }>()

  for (const employee of employees) {
    importances.set(employee.id, {
      importance: employee.importance,
      sub: employee.subordinates
    })
  }

  function dfs(id: number): number {

    let result = 0

    const employee = importances.get(id)

    if (!employee) {
      return 0
    }

    result += employee.importance

    if (employee.sub.length > 0) {
      for (const subId of employee.sub) {
        result += dfs(subId)
      }
    }

    return result
  }

  return dfs(id)
}