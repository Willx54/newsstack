import { Component } from '@angular/core';
import { EmailService, IMessage } from 'app/email.service';

@Component({
  templateUrl: 'app/contact/contact.component.html',
  styleUrls: ['app/contact/contact.component.min.css']
})
export class ContactComponent {

	// model = '';
	submitted = false;

	// onSubmit() { this.submitted = true; }

	// from email php tutorial
	title = 'Angular PHP Email Example!';
	model: IMessage = {};

	constructor(private emailService: EmailService) {

	}

	sendEmail(model: IMessage) {
		console.log('contact component happening');
		this.emailService.sendEmail(model).subscribe(res => {
			console.log('CLEARED');
		   	console.log('AppComponent Success', res);
		   	this.submitted = true;
		}, error => {
		   console.log('AppComponent Error', error);
		})
	}

	// end email php tutorial
}
	