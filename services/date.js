export const uniqueDates = (tasks) => {
    const unique = [];
   
    tasks.forEach((task) => {
        if (!unique.includes(task.FechaStd)) unique.push(task.FechaStd);
      });
    return unique;
};

export const OrderDates = (dates)=>{
   return dates.sort((a,b) =>{
      const firstDate = moment(a,"DD/MM/YYYY");
      const secondDate = moment(b,"DD/MM/YYYY");
      return firstDate - secondDate;
   });
}