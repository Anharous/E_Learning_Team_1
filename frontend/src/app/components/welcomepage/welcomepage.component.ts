import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private _router: Router,
    private http: HttpClient // Inject HttpClient for backend communication
  ) { }

  ngOnInit(): void {
    $("#subtext1").click(function () {
      $("#innertext1").slideToggle(300);
      if ($('#innertext2').is(':visible') || $('#innertext3').is(':visible') || $('#innertext4').is(':visible')) {
        $('#innertext2').slideUp(300);
        $('#innertext3').slideUp(300);
        $('#innertext4').slideUp(300);
      }
    });
    $("#subtext2").click(function () {
      $("#innertext2").slideToggle(300);
      if ($('#innertext1').is(':visible') || $('#innertext3').is(':visible') || $('#innertext4').is(':visible')) {
        $('#innertext1').slideUp(300);
        $('#innertext3').slideUp(300);
        $('#innertext4').slideUp(300);
      }
    });
    $("#subtext3").click(function () {
      $("#innertext3").slideToggle(300);
      if ($('#innertext1').is(':visible') || $('#innertext2').is(':visible') || $('#innertext4').is(':visible')) {
        $('#innertext1').slideUp(300);
        $('#innertext2').slideUp(300);
        $('#innertext4').slideUp(300);
      }
    });
    $("#subtext4").click(function () {
      $("#innertext4").slideToggle(300);
      if ($('#innertext1').is(':visible') || $('#innertext2').is(':visible') || $('#innertext3').is(':visible')) {
        $('#innertext1').slideUp(300);
        $('#innertext2').slideUp(300);
        $('#innertext3').slideUp(300);
      }
    });
  }

  navigate(): void {
    this._router.navigate(['/login']);
  }

  // Method to handle form submission
  onSubmit(form: any): void {
    const contactDTO = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      message: form.value.message
    };
    
    const url = 'http://localhost:8083/submit-contact'; // Your backend endpoint
    this.http.post(url, contactDTO).subscribe({
      next: (response) => {
        console.log('Message sent successfully', response);
        alert('Your message has been sent!');
        form.reset();
      },
      error: (error) => {
        console.error('Error sending message', error);
        alert('There was an error sending your message. Please try again.');
      }
    });
  }
  
  
}

