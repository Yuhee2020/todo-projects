import React, {ChangeEvent, useRef, useState} from 'react';
import {StateType} from "../../hooks";
import {Button} from "antd";
import {ImportOutlined} from "@ant-design/icons";

type PropsType = {
    onFileLoad: (project: StateType) => void
}

export const FileUploader = ({onFileLoad}: PropsType) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const selectFileHandler = () => {
        inputRef && inputRef.current?.click();
    };
    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = (event) => {
                if (typeof event.target?.result === "string") {
                    onFileLoad(JSON.parse(event.target.result));
                }
            };
        }
    };
    return (
        <div>
            <Button icon={<ImportOutlined/>} onClick={selectFileHandler}>import
                project</Button>
            <input
                style={{display: 'none'}}
                ref={inputRef}
                type="file"
                onChange={uploadHandler}
            />
        </div>
    )
}






