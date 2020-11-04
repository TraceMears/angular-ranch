import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MailMessage } from 'src/app/common/mail-message';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  
  emailFormGroup: FormGroup;
  mm: MailMessage = new MailMessage();

  constructor(private fB: FormBuilder, private eMS: EmailService) { }

  ngOnInit(): void {
    this.emailFormGroup = this.fB.group({
      
        subject: [''],
        body: ['']
      
    });
  }

  sendEmail() {
    this.mm.subject = this.emailFormGroup.get('subject').value;
    this.mm.bodyText = this.emailFormGroup.get('body').value;
    this.mm.emailAddress = 'mailtesttimjohnson@gmail.com';

    console.log(this.mm);

    this.eMS.sendEmail(this.mm);
  }
}
