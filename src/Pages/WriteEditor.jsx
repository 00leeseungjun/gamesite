import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import './WriteEditor.css';

/* 🧩 커스텀 FontSize 확장 */
import { Extension } from '@tiptap/core';

const FontSize = Extension.create({
    name: 'fontSize',

    addOptions() {
        return {
            types: ['textStyle'],
        };
    },

    addAttributes() {
        return {
            fontSize: {
                default: null,
                parseHTML: element => element.style.fontSize?.replace('px', ''),
                renderHTML: attributes => {
                    if (!attributes.fontSize) return {};
                    return {
                        style: `font-size: ${attributes.fontSize}px`,
                    };
                },
            },
        };
    },

    addCommands() {
        return {
            setFontSize:
                fontSize =>
                    ({ chain }) => {
                        return chain()
                            .setMark('textStyle', { fontSize })
                            .run();
                    },
        };
    },
});

/* ✍️ 메인 컴포넌트 */
function WriteEditor() {
    const navigate = useNavigate();

    const editor = useEditor({
        extensions: [StarterKit, TextStyle, Color, FontSize],
        content: '',
    });

    const handleSave = () => {
        console.log('작성한 HTML:', editor?.getHTML());
        // TODO: 서버 저장
        navigate(-1);
    };

    return (
        <div className="write-wrapper">
            <h2>글쓰기</h2>

            {/* 🛠 툴바 */}
            <div className="toolbar">
                <button onClick={() => editor?.chain().focus().toggleBold().run()}>굵게</button>
                <button onClick={() => editor?.chain().focus().toggleItalic().run()}>기울임</button>
                <button onClick={() => editor?.chain().focus().toggleStrike().run()}>취소선</button>
                <button onClick={() => editor?.chain().focus().setColor('#e53935').run()}>🔴 빨강</button>
                <button onClick={() => editor?.chain().focus().setColor('#1e88e5').run()}>🔵 파랑</button>
                <button onClick={() => editor?.chain().focus().setFontSize(14).run()}>14px</button>
                <button onClick={() => editor?.chain().focus().setFontSize(20).run()}>20px</button>
                <button onClick={() => editor?.chain().focus().setFontSize(30).run()}>30px</button>
            </div>

            {/* 📝 에디터 영역 */}
            <EditorContent editor={editor} className="write-editor" />

            {/* ✅ 작성 완료 버튼 */}
            <button className="write-btn" onClick={handleSave}>
                작성 완료
            </button>
        </div>
    );
}

export default WriteEditor;
