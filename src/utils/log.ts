const log  = function(args: any){
  console.log('----->')
  console.log(...arguments as any)
}

export default log;
