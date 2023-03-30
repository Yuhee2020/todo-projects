import React, {memo} from 'react';
import {Button} from "antd";
import {setFilter} from "../../store/todolistReducer/todolistReducer";
import {useAppDispatch, useAppSelector} from "../../hooks";
import s from "./FilterButtons.module.css"

export const FilterButtons = memo(() => {
    const dispatch=useAppDispatch()
    const filter=useAppSelector(state=>state.todolist.filter)
    return (
        <div className={s.buttons}>
            <Button size={"small"} type={filter === "all" ? "primary" : "default"} onClick={() => {
                dispatch(setFilter("all"))
            }}>ALL</Button>
            <Button size={"small"} type={filter === "active" ? "primary" : "default"}
                    onClick={() => {
                        dispatch(setFilter("active"))
                    }}>ACTIVE</Button>
            <Button size={"small"} type={filter === "completed" ? "primary" : "default"}
                    onClick={() => {
                        dispatch(setFilter("completed"))
                    }}>COMPLETED</Button>
        </div>
    );
});

