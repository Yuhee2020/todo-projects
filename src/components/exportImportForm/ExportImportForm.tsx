import React, {memo} from 'react';
import s from "./ExportImportForm.module.scss"
import {Button} from "antd";
import {ExportOutlined} from "@ant-design/icons";
import {FileUploader} from "../fileUploader/FileUploader";
import {StateType, useAppDispatch, useAppSelector} from "../../hooks";
import {saveData} from "../../utils";
import {setImportedProject} from "../../store/todolistReducer/todolistReducer";

export const ExportImportForm = memo(() => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state)
    const handleExportProjectClick = () => {
        saveData(state)
    }
    const handleImportProjectClick = (data: StateType) => {
        dispatch(setImportedProject(data.todolist))
    }
    return (
        <div className={s.exportImportBox}>
            <Button size="small" type="text" icon={<ExportOutlined/>}
                    onClick={handleExportProjectClick}>export
            </Button>
            <FileUploader onFileLoad={handleImportProjectClick}/>
        </div>
    );
});
