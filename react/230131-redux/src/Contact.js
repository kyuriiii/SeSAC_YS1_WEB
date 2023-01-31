import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
    const [list,setList] = useState([]);

    function writeList() {
        let form = document.getElementById("form_write");
        let newList = {
            writer: form.writer.value,
            title: form.title.value
        };

        setList([...list, newList]);
    }

    function getDB() {
        axios.get("/")
        .then((res) => {
            console.log( res.data );
        })
    }

    function writeDB() {
        let form = document.getElementById("form_write");
        let newList = {
            writer: form.writer.value,
            title: form.title.value
        };
        axios.post("http://localhost:8080", newList)
        .then((res) => {
            alert(res.data)
        });
    }

    return (
        <div>
            <form id="form_write" style={{marginBottom: '15px'}}>
                <input type="text" name="writer" placeholder='작성자' />
                <input type="text" name="title" placeholder='제목' />
                <button type='button' onClick={getDB}>console로 가져오기</button>
                <button type='button' onClick={writeList}>작성</button>
                <button type='button' onClick={writeDB}>DB작성</button>
            </form>

            <table border={1}>
                <thead>
                    <tr>
                        <th>번호</th><th>제목</th><th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((value, i) => {
                        // value = { writer: ~~ , title~~ };
                        return ( 
                            <tr>
                                <td>{i+1}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>            
        </div>
    )
}