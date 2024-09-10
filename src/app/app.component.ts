import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { Character } from './character';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AppService]
})
export class AppComponent {
  title = 'Game Of Thrones Characters';
  characters: any[] = [];
  selectedCharacter: any = null;

  constructor(private characterService: AppService) {}

  ngOnInit(): void {
    // Fetch characters when the component initializes
    this.characterService.getCharacters().subscribe(data => {
      this.characters = data;
    });
  }
}