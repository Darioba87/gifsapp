import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'gifs-search-box',
    template: `
    <h3>Search:</h3>
    <input type="text" 
    class="form-control" 
    placeholder="Search Gifs..."
    (keyup.enter)="searchTag()"
    #txtTagInput
    
    >
    `
})

export class SearchBoxComponent {
@ViewChild('txtTagInput')
public tagInput!: ElementRef<HTMLInputElement>

    constructor() { }
    searchTag() {
        const newTag = this.tagInput.nativeElement.value
        console.log(newTag)
    }
}