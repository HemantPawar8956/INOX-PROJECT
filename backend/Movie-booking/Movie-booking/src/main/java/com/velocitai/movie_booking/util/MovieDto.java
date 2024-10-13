package com.velocitai.movie_booking.util;

import java.time.LocalTime;
import java.util.Set;

import com.velocitai.movie_booking.model.Movie;
import com.velocitai.movie_booking.model.Show;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovieDto {

	private long id;
	private String moviename;
	private String movieLanguage;
	private LocalTime duration;
	private String genre;

	private String movieImage;
    private Set<Show> shows;
	public MovieDto(Movie movie) {
		this.id = movie.getId();
		this.moviename = movie.getMoviename();
		this.movieLanguage = movie.getMovieLanguage();
		this.duration = movie.getDuration();
		this.genre = movie.getGenre();
		this.movieImage = movie.getMovieImage();
		
	}
	
	
}
