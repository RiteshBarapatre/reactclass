import React, {useEffect, useState} from "react";
import News from "./News";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

const NewsItems = (props)=> {


  const [page, setPage] = useState(1)
  const [state, setState] = useState({
    articles: [],
    loading: false,
    totalResult: 0,
  })


    async function mainFunc(){
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&from=2023-01-19&to=2023-01-19&pageSize=${props.pageSize}&sortBy=popularity&apiKey=${props.apiKey}&page=${page}`;
    setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(50)
    setState({
      articles: parsedData.articles,
      loading: false,
      totalResult: parsedData.totalResults,
    });
    document.title = "NewsMonkey - " + props.title;
    props.setProgress(100)
  }

  useEffect(()=>{
    mainFunc()
    // eslint-disable-next-line 
  },[])



  async function fetchMoreData(){
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&from=2023-01-19&to=2023-01-19&pageSize=${props.pageSize}&sortBy=popularity&apiKey=${props.apiKey}&page=${page + 1}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setState({
      articles: state.articles.concat(parsedData.articles),
      totalResult: parsedData.totalResults,
    });
    document.title = "NewsMonkey - " + props.title;
  };

    return (
      <>
        <div className="container">
          <h2 className="my-3 mb-4 text-center">
            NewsMonkey - {props.title}
          </h2>
          {!state.loading ?
          <InfiniteScroll
            dataLength={state.articles.length}
            style={{overflow : "hidden"}}
            next={fetchMoreData}
            hasMore={state.articles.length !== state.totalResult}
            loader={<Spinner/>}
          >
          <div className="container">

          
            <div className="row">
              {state.articles.map((element) => {
                return (
                  <div className="col-md-4 col-sd-1 my-3" key={element.url}>
                    <News
                      title={
                        element.title === null
                          ? (element.title = "Title Missing...")
                          : element.title.slice(0, 43).concat("...")
                      }
                      names={
                        element.source.name === null
                          ? (element.source.name = "Unknown")
                          : element.source.name
                      }
                      description={
                        element.description === null
                          ? (element.description = "Description Missing...")
                          : element.description.slice(0, 90).concat("...")
                      }
                      author={
                        element.author === null
                          ? (element.author = "Unknown")
                          : element.author
                      }
                      date={
                        element.publishedAt === null
                          ? (element.publishedAt = "Random")
                          : new Date(element.publishedAt).toUTCString()
                      }
                      imgUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://images8.alphacoders.com/682/thumb-1920-682878.jpg"
                      }
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
            </div>
            </div>
          </InfiniteScroll>
          :<Spinner/>}
          
        </div>
      </>
    );
  }
NewsItems.defaultProps = {
  pageSize: 10,
  category: "general",
  title: "NewsMonkey trending...",
  country: "in",
};


export default NewsItems