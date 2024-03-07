import chalkAnimation from 'chalk-animation';
import boxen from 'boxen';
import chalk from 'chalk'
import inquirer from 'inquirer';

//console.log(chalk.yellow('Hello Amna, Welcome & Happy  coding!'))
console.log(chalk.yellow('Node   Project o5:  Currency  converter '));
const options:string[]=['PKR','GBP','INR','USD','CNY']
//new node project
const  Conversion={
'PKR':
  {
   'CNY':0.026,
   'USD':0.0036,
   'INR':0.30,
   'PKR':1,
   'GBP':0.0029
  },

 'INR':
  {
  'CNY':0.087,
  'USD':0.012,
  'INR':1,
  'PKR':3.34,
  'GBP':0.0096
  },
  'CNY':
  {
  'CNY':1,
  'USD':0.14,
  'INR':11.53,
  'PKR':38.50,
  'GBP':0.11
  },
  'USD':
  { 
  'CNY':7.20,
  'USD':1,
  'INR':82.99,
  'PKR':277.14,
  'GBP':0.79
  },
  'GBP':
  {
  'CNY':8.94,
  'USD':1.26,
  'INR':104.45,
  'PKR':348.81,
  'GBP':1
  }

}
 let  answers:{
   from: 'USD'|'INR'|'PKR'|'GBP'|'CNY',
   TO:'USD'|'INR'|'PKR'|'GBP'|'CNY',
   amount:number
 } =
     await inquirer.prompt([
    {
   type:'list',
   name:"from",
   message:chalk.cyanBright('Select the currency to be converted:'),
   choices:options,
 },
 {
    type:'list',
    name:"TO",
    message:chalk.cyanBright('Select currency to which amount is converted: '),
    choices:options,
},
{
   type:'input',
   name:'amount',
   message:chalk.magenta('Enter an amount:')
  
}
])

  const{from, TO ,amount}= answers
  if(from && TO && amount)
  {
   let result = Conversion[from][TO] * amount ;
   console.log(chalk.bgGray(`Conversion of ${from} to ${TO} is  ${result}.`))
   console.log(chalk.green('Your currency is converted successfully!!!'))

}
  else{
    console.log(chalk.cyan('Invalid invalid .Kindly fulfill all requirements'))
}



















