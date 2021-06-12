import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() skills: FormArray;
  skillName: string;
  experience: string;
  rate: string;
  constructor() {}

  ngOnInit(): void {
    console.log(this.skills.length);
  }
  setSkill(skill, experience, rate) {
    return new FormGroup({
      skillName: new FormControl(skill, []),
      experience: new FormControl(experience, []),
      rate: new FormControl(rate, [])
    });
  }

  addSkills() {
    this.skills.push(this.setSkill(this.skillName, this.experience, this.rate));
    this.skillName = '';
    this.experience = '';
    this.rate = '';
    console.log(this.skills.controls[0]['controls'].experience.value);
  }
}
