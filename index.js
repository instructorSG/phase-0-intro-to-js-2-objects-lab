// Write your solution in this file!
const employee ={
   
}
// function updateEmployeeWithKeyAndValue(employee, key, value){
//     return {...employee, [key]:value,}

// }
const updateEmployeeWithKeyAndValue=(employee, key, value)=>{
    return {...employee, [key]:value,}

}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value)=>{
    employee[key]=value
    return employee
}

const deleteFromEmployeeByKey=(employee, key)=>{
    return {
        ...employee , [key]:undefined,
    }  
}

const destructivelyDeleteFromEmployeeByKey=(employee, key)=>{
    delete employee[key]
    return employee
}