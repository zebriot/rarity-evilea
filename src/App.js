import { useEffect, useState, useMemo } from "react";
import { Pagination } from 'antd'
import allMovies from "./movies.json";
import eyes from "./eyes.json";
import background from "./background.json";
import body from "./body.json";
import tattoo from "./tattoo.json";
import cloth from "./cloth.json";
import horn from "./horn.json";
import mouth from "./mouth.json";
import hair from "./hair.json";
import evilea from "./evilea.json";


export default function App() {
  const [genre, setGenre] = useState("");
  const [searchTerm, setSearchTem] = useState("");

  const movies = useMemo(() => {
    if (genre === "") {
      if (searchTerm === "") {
        return evilea;
      } else {
        return evilea.filter((movie) => {
          const searchFields =
            `${movie.title.toLowerCase()} ` +
            `${movie.year} ` +
            `${movie.directors.toLowerCase()}` +
            `${movie.actors.join("").toLowerCase()}` +
            `${movie.plot.toLowerCase()}`;
          return searchFields.includes(searchTerm.toLowerCase());
        });
      }
    }
    return evilea.filter((movie) => {
      const movieGenre = movie.genre.map((val) => val.toLowerCase());
      return movieGenre.includes(genre);
    });
  }, [genre, searchTerm]);

  useEffect(() => {
    if (searchTerm !== "") {
      setGenre("");
    }
  }, [searchTerm]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold my-6">
        Vampies
      </h1>
      <div>
        <input
          className="border p-1 px-3 my-3"
          name="searchMovie"
          placeholder="Search Movie"
          value={searchTerm}
          onChange={(e) => setSearchTem(e.target.value)}
        />
      </div>
      <div className="flex flex-row">
        <form >
          <select
            style={{ border: "solid 2px", marginRight: "2px" }}
            className="basis-1/3"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            {background.map((option, i) => {
              return (
                <option className="py-2" value={option.value} key={i}>
                  {option.label}<span>   ({option.count})</span>
                </option>
              );
            })}
          </select>
          <select
            style={{ border: "solid 2px", marginRight: "2px" }}
            className="basis-1/2"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            {eyes.map((option, i) => {
              return (
                <option className="py-2" value={option.value} key={i}>
                  {option.label}<span>   ({option.count})</span>
                </option>
              );
            })}
          </select>
          <select
            style={{ border: "solid 2px", marginRight: "2px" }}
            className="basis-1/2"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            {body.map((option, i) => {
              return (
                <option className="py-2" value={option.value} key={i}>
                  {option.label}<span>   ({option.count})</span>
                </option>
              );
            })}
          </select>
          <select
            style={{ border: "solid 2px", marginRight: "2px" }}
            className="basis-1/2"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            {tattoo.map((option, i) => {
              return (
                <option className="py-2" value={option.value} key={i}>
                  {option.label}<span>   ({option.count})</span>
                </option>
              );
            })}
          </select>
          <select
            style={{ border: "solid 2px", marginRight: "2px" }}
            className="basis-1/2"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            {cloth.map((option, i) => {
              return (
                <option className="py-2" value={option.value} key={i}>
                  {option.label}<span>   ({option.count})</span>
                </option>
              );
            })}
          </select>
          <select
            style={{ border: "solid 2px", marginRight: "2px" }}
            className="basis-1/2"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            {horn.map((option, i) => {
              return (
                <option className="py-2" value={option.value} key={i}>
                  {option.label}<span>   ({option.count})</span>
                </option>
              );
            })}
          </select>
          <select
            style={{ border: "solid 2px", marginRight: "2px" }}
            className="basis-1/2"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            {mouth.map((option, i) => {
              return (
                <option className="py-2" value={option.value} key={i}>
                  {option.label}<span>   ({option.count})</span>
                </option>
              );
            })}
          </select>
          <select
            style={{ border: "solid 2px", marginRight: "2px" }}
            className="basis-1/2"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            {hair.map((option, i) => {
              return (
                <option className="py-2" value={option.value} key={i}>
                  {option.label}<span>   ({option.count})</span>
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <hr className="mb-6 mt-3" />
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        {evilea.map((evilea, index) => {
          console.log("evilea",evilea)
          console.log("evilea [0]===>",evilea.attributes[0].trait_type)
          console.log("evilea [0]===>",evilea.attributes[0].value)
          return (
            <div
              key={index}
              className="md:flex border rounded p-4 my-4 lg:my-0 text-ellipsis overflow-hidden"
            >
              <div className="flex-none md:w-48 flex justify-center items-center">

                <img
                  src={`https://ipfs.io/ipfs/${evilea.image.substring(7)}`}
                  alt="Not Found"
                />
              </div>
              <div className={`lg:grow flex flex-col`}>
                <h1 className="text-base font-bold mt-2">{evilea.name}</h1>
                <span className="text-sm mt-2">
                   <span className="m-2">{evilea.attributes[0].trait_type} :</span> 
                   <span className="m-1">{evilea.attributes[0].value}</span> 
                   <span className="m-4">{evilea.attributes[0].count}</span> 
                </span>
                <span className="text-sm mt-2">
                   <span className="m-2">{evilea.attributes[1].trait_type} :</span> 
                   <span className="m-1">{evilea.attributes[1].value}</span> 
                </span>
                <span className="text-sm mt-2">
                   <span className="m-2">{evilea.attributes[2].trait_type} :</span> 
                   <span className="m-1">{evilea.attributes[2].value}</span> 
                </span>
                <span className="text-sm mt-2">
                   <span className="m-2">{evilea.attributes[3].trait_type} :</span> 
                   <span className="m-1">{evilea.attributes[3].value}</span> 
                </span>
                <span className="text-sm mt-2">
                   <span className="m-2">{evilea.attributes[4].trait_type} :</span> 
                   <span className="m-1">{evilea.attributes[4].value}</span> 
                </span>
                <span className="text-sm mt-2">
                   <span className="m-2">{evilea.attributes[5].trait_type} :</span> 
                   <span className="m-1">{evilea.attributes[5].value}</span> 
                </span>
                <span className="text-sm mt-2">
                   <span className="m-2">{evilea.attributes[6].trait_type} :</span> 
                   <span className="m-1">{evilea.attributes[6].value}</span> 
                </span>
                <span className="text-sm mt-2">
                   <span className="m-2">{evilea.attributes[7].trait_type} :</span> 
                   <span className="m-1">{evilea.attributes[7].value}</span> 
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
