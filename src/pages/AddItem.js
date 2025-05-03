import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const AddItem = () => {
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [cat, setCat] = useState("");

    const handleClick = async e => {
        e.preventDefault()
    }

    return (
        <div className="addItem">
            <div className="content">
                <input type='text' placeholder='Title' onChange={e=>setTitle(e.target.value)}/>
                <div className='editorContainer'>
                    <ReactQuill className='editor' theme="snow" value={value} placeholder='Attention: This page is not currently functional and beyond the scope of project. It will be completed in future updates.' onChange={setValue} />
                </div>
            </div>
            <div className='menu'>
                <div className='item'>item1</div>
                <div className='item'>item2</div>
                <div>
                    <button className='btn btn-primary' onClick={handleClick}>Post</button>
                </div>
                <div className='item'>
                    <h2>Category</h2>
                    <div className='cat'>
                        <input type='radio' checked={cat === "40000faq"} name="cat" value="40000faq" id="40000faq" onChange={e=>setCat(e.target.value)}/>
                        <label htmlFor='40000faq'>40000 FAQ</label>
                    </div>
                    <div className='cat'>
                        <input type='radio' checked={cat === "aosfaq"} name="cat" value="aosfaq" id="aosfaq" onChange={e=>setCat(e.target.value)}/>
                        <label htmlFor='aosfaq'>AoS FAQ</label>
                    </div>
                    <div className='cat'>
                        <input type='radio' checked={cat === "lore"} name="cat" value="lore" id="lore" onChange={e=>setCat(e.target.value)}/>
                        <label htmlFor='lore'>Lore</label>
                    </div>
                    <div className='cat'>
                        <input type='radio' checked={cat === "misc"} name="cat" value="misc" id="misc" onChange={e=>setCat(e.target.value)}/>
                        <label htmlFor='misc'>Misc</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddItem;