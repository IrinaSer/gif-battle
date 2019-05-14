import {Component, OnInit} from '@angular/core';
import {GifService} from "@app/core/services/gif.service";

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
    randomGif;
    caption = '';

    constructor(private gifService: GifService) {
    }

    ngOnInit() {
        this.getRandomGif();
    }

    getRandomGif() {
        this.gifService.getRandom()
            .subscribe(gif => {
                this.randomGif = gif
            });
    }

    saveGif() {
        this.gifService.saveGif(this.randomGif.id, this.randomGif.url, this.caption)
            .subscribe(data => {
                this.getRandomGif();
                this.caption = '';
            });
    }
}
