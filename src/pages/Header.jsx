import React, { useState } from 'react'
import { useEffect } from 'react'

function Header({ setMovies }) {

    const [search, setsearch] = useState("")
    const [record, setrecord] = useState([])

    useEffect(() => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
    }, [])

    useEffect(() => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const serch = all.filter(val => (val.Title).toLowerCase().includes(search.toLowerCase()))
        setrecord(serch)
        console.log(all.Title);
    }, [search])



    const general = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.item === "general"
        })
        setrecord(ans)
    }

    const favourite = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.item === "favourite"
        })
        setrecord(ans)
    }

    const Upcoming = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.item === "upcoming"
        })
        setrecord(ans)
    }

    const trending = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.item === "trending"
        })
        setrecord(ans)
    }

    const action = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.category === "action"
        })
        setrecord(ans)
    }

    const adventure = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.category === "adventure"
        })
        setrecord(ans)
    }

    const comedy = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.category === "comedy"
        })
        setrecord(ans)
    }

    const crime = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.category === "crime"
        })
        setrecord(ans)
    }

    const drama = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.category === "drama"
        })
        setrecord(ans)
    }

    const family = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.category === "family"
        })
        setrecord(ans)
    }

    const history = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.category === "history"
        })
        setrecord(ans)
    }

    const romance = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.category === "romance"
        })
        setrecord(ans)
    }

    const thriller = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.category === "thriller"
        })
        setrecord(ans)
    }

    const all = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
    }



    return (
        <>
            <div className="row">

                {/* header */}

                <div style={{ height: "100vh", width: "300px", position: "fixed", flexDirection: "column", display: "flex", padding: "10px" }} className='shadow d-flex justify-content-between align-items-center'>
                    <div className='text-center'>
                        <img style={{ width: "100px", paddingBottom: "15px" }} src="https://yt3.googleusercontent.com/ytc/APkrFKajwPsgqdgc4KJObKo-gI0cpqCCybvMUC6clt7D=s900-c-k-c0x00ffffff-no-rj" className='text-center' />
                        <h3 style={{ color: "#8574af" }}>BlueLight Movies</h3>
                    </div>

                    <div>
                        <button style={{ borderRadius: "8px", display: "block", width: "100%", marginBottom: "10px", border: "1px solid black", background: "#8265fe", color: "white" }} onClick={general}>General</button>
                        <button style={{ borderRadius: "8px", display: "block", width: "100%", marginBottom: "10px", border: "1px solid black", background: "#8265fe", color: "white" }} onClick={trending}>Trending</button>
                        <button style={{ borderRadius: "8px", display: "block", width: "100%", marginBottom: "10px", border: "1px solid black", background: "#8265fe", color: "white" }} onClick={Upcoming}>Upcoming</button>
                        <button style={{ borderRadius: "8px", display: "block", width: "100%", marginBottom: "10px", border: "1px solid black", background: "#8265fe", color: "white" }} onClick={favourite}>Favourite</button>
                        <button style={{ borderRadius: "8px", display: "block", width: "100%", marginBottom: "10px", border: "1px solid black", background: "#8265fe", color: "white" }}>Login</button>
                    </div>
                    <div style={{ width: "100%" }}>
                        <button style={{ borderRadius: "8px", width: "100%", marginBottom: "10px", border: "1px solid black", background: "#8265fe", color: "white" }}>Login</button>
                    </div>
                </div>

                {/* slider */}

                <div style={{ marginLeft: "300px" }}>
                    <div style={{ background: "rgba(111, 86, 242, 0.88)", padding: "40px", width: "1200px" }}>
                        <div style={{ justifyContent: "center", display: "flex" }}>
                            <input value={search} onChange={(e) => setsearch(e.target.value)} type="text" style={{ width: "400px", height: "40px", padding: "15px", border: "1px solid black", borderRadius: "10px", marginTop: "68px" }} placeholder='Search Movies' />
                        </div>
                        <div style={{ paddingTop: "60px", display: "flex", flexWrap: "wrap", margin: "auto" }} className='px-5 justify-content-center'>
                            <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "#6854e7", fontWeight: "700", height: "30px", }} className='px-3 mb-2' onClick={all}>All</button>
                            <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "#6854e7", fontWeight: "700", height: "30px" }} className='px-3' onClick={action}>Action</button>
                            <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "#6854e7", fontWeight: "700", height: "30px" }} className='px-3' onClick={adventure}>Adventure</button>
                            <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "#6854e7", fontWeight: "700", height: "30px" }} className='px-3' onClick={comedy} >Comedy</button>
                            <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "#6854e7", fontWeight: "700", height: "30px" }} className='px-3' onClick={crime}>Crime</button>
                            <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "#6854e7", fontWeight: "700", height: "30px" }} className='px-3' onClick={drama}>Drama</button>
                            <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "#6854e7", fontWeight: "700", height: "30px" }} className='px-3' onClick={family}>Family</button>
                            <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "#6854e7", fontWeight: "700", height: "30px" }} onClick={history}>History</button>
                            <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "#6854e7", fontWeight: "700", height: "30px" }} onClick={romance}>Romance</button>
                            <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "#6854e7", fontWeight: "700", height: "30px" }} onClick={thriller}>Thriller</button>
                        </div>
                    </div>

                    {/* card  */}

                    <div style={{ marginTop: "10px", width: "1216px", display: "flex", flexWrap: "wrap" }}>
                        {
                            record && record.map((val) => {
                                return (
                                    <div className="card m-2" style={{ width: '18rem' }}>
                                        <img src={val.Poster} style={{ height: "200px", objectFit: "contain" }} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{val.Title}</h5>
                                            <p className="card-text">Year :- <strong>{val.Year}</strong></p>
                                            <p className="card-text">imdbID :- <strong>{val.imdbID}</strong></p>
                                            <p className="card-text">Type :- <strong>{val.Type}</strong></p>
                                            <a href="#" className="btn btn-primary" style={{ background: "rgb(130, 101, 254)" }}>Book Ticket</a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>



                </div>

            </div>
        </>
    )
}

export default Header