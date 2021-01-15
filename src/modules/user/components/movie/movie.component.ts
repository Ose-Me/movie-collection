import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { ModalService } from "../modal/modal.service";
import { MovieService } from "../../services/movie.service";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"],
})
export class MovieComponent implements OnInit {
  sub;
  id;
  movie;
  loading;
  showVideo: boolean;
  budget: CurrencyPipe;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private modalService: ModalService,
    private movieService: MovieService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      console.log(params);
      this.id = params.get("id");
      this.movieService
        .getMovie(this.id)
        .then((data: any) => {
          this.movie = data;
          this.budget = this.movie.budget
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(["movie"]);
  }

  openModal(id: string) {
    this.modalService.open(id);
    this.showVideo = true;
  }

  closeModal(id: string) {
    this.modalService.close(id);
    this.showVideo = false;
  }

  get videoUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.movie
        ? "http://www.youtube.com/embed/" + this.movie.vidoes[0].key
        : " "
    );
  }
}
