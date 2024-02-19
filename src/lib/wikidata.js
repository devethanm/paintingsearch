

// function to get paintings from user search 
export async function getPaintings(targetEntity) {
    const url = new URL("https://query.wikidata.org/bigdata/namespace/wdq/sparql");
    const urlquery= {
      format: "json",
      // ( cat test query ) query: "SELECT ?item ?itemLabel WHERE { ?item wdt:P31 wd:Q146. } LIMIT 10",
      // TODO: if their object has children such as a query for paintings depicting
      // "woodwind instruments" run two queries one like the query below and one like 
      // paintings depicting woodwind instruments and compare the result sets
      // and display the bigger result set
      query: `SELECT ?item ?itemLabel ?object ?objectLabel ?image WHERE {?item wdt:P31/wdt:P279* wd:Q3305213 . ?item wdt:P180 wd:${targetEntity} . ?item wdt:P18 ?image . SERVICE wikibase:label { bd:serviceParam wikibase:language "en" } } LIMIT 10`,
    };

    for (const k in urlquery) {
      url.searchParams.append(k, urlquery[k]);
    }
    const res = await fetch(url);
  
    return { paintings: await res.json() };
  }

  export function parsePaintings(data) {

    const bindings = data['paintings']['results']['bindings'];
    
    let results = [];
    bindings.forEach((element) => {
      const image = element['image']['value'];
      const value = element['item']['value'];
      const label = element['itemLabel']['value'];
      results.push({
        image: image,
        value: value,
        label: label,
      });
    });
    
    return {
      // create a new interface for paintingsData perhaps
      results: results,
    };
  }
  