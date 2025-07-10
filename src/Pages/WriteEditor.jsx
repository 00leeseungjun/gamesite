import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import Heading from '@tiptap/extension-heading';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { Extension } from '@tiptap/core';

import {
    MdFormatBold, MdFormatItalic, MdFormatUnderlined, MdStrikethroughS,
    MdHighlight, MdFormatColorText, MdFormatSize, MdLooksOne, MdLooksTwo,
    MdFormatListBulleted, MdFormatListNumbered, MdInsertLink, MdInsertPhoto,
} from 'react-icons/md';
import './WriteEditor.css';

/* ------ 폰트 크기 확장 ------ */
const FontSize = Extension.create({
    name: 'fontSize',
    addOptions() { return { types: ['textStyle'] }; },
    addAttributes() {
        return {
            fontSize: {
                default: null,
                parseHTML: el => el.style.fontSize?.replace('px', ''),
                renderHTML: attrs =>
                    attrs.fontSize ? { style: `font-size:${attrs.fontSize}px` } : {},
            },
        };
    },
    addCommands() {
        return {
            setFontSize:
                size =>
                    ({ chain }) => chain().setMark('textStyle', { fontSize: size }).run(),
        };
    },
});

export default function WriteEditor() {
    const nav = useNavigate();
    const [title, setTitle] = useState('');
    const [cat, setCat] = useState('자유');

    /* --- TipTap 에디터 --- */
    const editor = useEditor({
        extensions: [
            StarterKit,
            TextStyle, Color, FontSize,
            Underline, Highlight,
            Heading.configure({ levels: [1, 2] }),
            BulletList, OrderedList,
            Link, Image,
        ],
        content: '',
    });

    const save = () => {
        console.log({
            title,
            category: cat,
            html: editor?.getHTML(),
        });
        nav(-1);
    };
    const insertImg = () => {
        const url = prompt('이미지 URL');
        if (url) editor?.chain().focus().setImage({ src: url }).run();
    };

    /* ---------- 렌더링 ---------- */
    return (
        <div className="write-wrapper">
            <h2>글쓰기</h2>

            {/* 제목 */}
            <input
                className="title-input"
                placeholder="제목을 입력하세요"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            {/* 카테고리 */}
            <div className="category-group">
                {['자유', '질문'].map(c => (
                    <button
                        key={c}
                        className={`category-btn ${cat === c ? 'active' : ''}`}
                        onClick={() => setCat(c)}
                    >
                        {c}
                    </button>
                ))}
            </div>

            {/* 툴바 */}
            <div className="toolbar">
                {/* ① 서식 */}
                <button className="tbtn" onClick={() => editor?.chain().focus().toggleBold().run()} title="굵게"><MdFormatBold /></button>
                <button className="tbtn" onClick={() => editor?.chain().focus().toggleItalic().run()} title="기울임"><MdFormatItalic /></button>
                <button className="tbtn" onClick={() => editor?.chain().focus().toggleUnderline().run()} title="밑줄"><MdFormatUnderlined /></button>
                <button className="tbtn" onClick={() => editor?.chain().focus().toggleStrike().run()} title="취소선"><MdStrikethroughS /></button>
                <span className="divider" />

                {/* ② 하이라이트 & 색상 */}
                <button className="tbtn" onClick={() => editor?.chain().focus().toggleHighlight().run()} title="형광"><MdHighlight /></button>
                <label className="color-picker" title="글자색">
                    <MdFormatColorText />
                    <input type="color" onChange={e => editor?.chain().focus().setColor(e.target.value).run()} />
                </label>
                <span className="divider" />

                {/* ③ 글자크기 셀렉트 */}
                <label className="size-select" title="글자크기">
                    <MdFormatSize />
                    <select defaultValue="" onChange={e => e.target.value && editor?.chain().focus().setFontSize(Number(e.target.value)).run()}>
                        <option value="">size</option>
                        {[12, 14, 16, 18, 24, 32].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                </label>
                <span className="divider" />

                {/* ④ 제목 & 리스트 */}
                <button className="tbtn" onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()} title="제목1"><MdLooksOne /></button>
                <button className="tbtn" onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} title="제목2"><MdLooksTwo /></button>
                <button className="tbtn" onClick={() => editor?.chain().focus().toggleBulletList().run()} title="불릿 목록"><MdFormatListBulleted /></button>
                <button className="tbtn" onClick={() => editor?.chain().focus().toggleOrderedList().run()} title="번호 목록"><MdFormatListNumbered /></button>
                <span className="divider" />

                {/* ⑤ 링크 & 이미지 */}
                <button className="tbtn" onClick={() => editor?.chain().focus()
                    .extendMarkRange('link')
                    .setLink({ href: prompt('URL 입력') || '' }).run()} title="링크"><MdInsertLink /></button>
                <button className="tbtn" onClick={insertImg} title="이미지"><MdInsertPhoto /></button>
            </div>

            {/* 본문 */}
            <EditorContent editor={editor} className="write-editor" />

            <button className="write-btn" onClick={save}>작성 완료</button>
        </div>
    );
}
