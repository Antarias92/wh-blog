import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const AddItem = () => {
    const [value, setValue] = useState('');
    return (
        <div className="addItem">
            <div className="content">
                <input type='text' placeholder='Title' />
                <div className='editorContainer'>
                    <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className='menu'>
                <div className='item'>item1</div>
                <div className='item'>item2</div>
                <div>
                    <button className='btn btn-primary'>Post</button>
                </div>
                <div className='item'>
                    <h2>Category</h2>
                    <div className='cat'>
                        <input type='radio' name="cat" value="40000faq" id="40000faq"/>
                        <label htmlFor='40000faq'>40000 FAQ</label>
                    </div>
                    <div className='cat'>
                        <input type='radio' name="cat" value="aosfaq" id="aosfaq"/>
                        <label htmlFor='aosfaq'>AoS FAQ</label>
                    </div>
                    <div className='cat'>
                        <input type='radio' name="cat" value="lore" id="lore"/>
                        <label htmlFor='lore'>Lore</label>
                    </div>
                    <div className='cat'>
                        <input type='radio' name="cat" value="misc" id="misc"/>
                        <label htmlFor='misc'>Misc</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddItem;