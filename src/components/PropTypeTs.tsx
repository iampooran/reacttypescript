import React from 'react'

type AppProps = {
    message: string;
    count?: number;
    disabled?: boolean;
    names?: string[];
    status?: "waiting" | "success";
    obj?:{
        id: string,
        title: string
    };
    //Array of Object
    objArr?:{
        id: string,
        title: string
    }[];

    onClick?: () => void;
    onChange?: (id:number) => void;
    onClickHandler?: (id:number) => string;
    onSomething?: Function;
    optional?: string;
    setState?: React.Dispatch<React.SetStateAction<number>>;
}

const PropTypeTs = ({message}: AppProps) => {
  return (
    <div>
        {message}
    </div>
  )
}

export default PropTypeTs


/*
There are three ways to pass props

type AppProps = {
  message: string;
};


const FunctionName = ({ message }: AppProps) => <div>{message}</div>;

const FunctionName = ({ message }: AppProps): JSX.Element => <div>{message}</div>;

const FunctionName = ({ message }: { message: string }) => <div>{message}</div>;
*/