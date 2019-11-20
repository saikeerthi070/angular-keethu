import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'sai keerthi';
  bill=12.34;
  company="digitallync";
  todate=new Date();
  students=['keerthi','teja','gopika'];
  employees=[
{"name":"Vishnu","age":"21","gender":"M","city":"Bhimavaram"},
{"name":"Arun Sai","age":"21","gender":"M","city":"Sangareddy"},
{"name":"Vinay","age":"24","gender":"M","city":"Hyderabad"},
{"name":"Susheel","age":"22","gender":"M","city":"Chilkur"},
{"name":"Akhila","age":"25","gender":"F","city":"Hyderabad"},
{"name":"Biswabharat","age":"21","gender":"M","city":"Hyderabad"},
{"name":"Bhagyasree","age":"25","gender":"F","city":"Gachibowli"},
{"name":"Anshuman","age":"21","gender":"M","city":"Vizag"},
{"name":"Vamsi","age":"24","gender":"M","city":"Hyderabad"},
{"name":"Prabhas","age":"38","gender":"M","city":"Bhimavaram"},
{"name":"Mahesh Babu","age":"42","gender":"M","city":"Hyderabad"},
{"name":"Allu Arjun","age":"35","gender":"M","city":"Vizag"},
{"name":"Vijay Devarakonda","age":"30","gender":"M","city":"Hyderabad"},
{"name":"Rajnikanth","age":"70","gender":"M","city":"Chennai"},
{"name":"KamalHaasan","age":"60","gender":"M","city":"Chennai"},
{"name":"Sachin","age":"44","gender":"M","city":"Mumbai"},
{"name":"Dhoni","age":"40","gender":"M","city":"Mumbai"},
{"name":"Kajal","age":"35","gender":"F","city":"Delhi"},
{"name":"Ileana","age":"30","gender":"F","city":"Goa"},
{"name":"Nayanathara","age":"35","gender":"M","city":"Chennai"}
];
}
