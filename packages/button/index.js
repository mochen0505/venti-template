'use strict';
import { Button } from "antd";

export function VTButton({ label, ...props }) {
    return <Button { ...props }>{ label }</Button>
}
