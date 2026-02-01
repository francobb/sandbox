import { useEffect, useRef, useState } from 'react';
import checkboxesData from "../../assets/checkboxData.json"

type CheckboxItem = {
    id: number;
    name: string;
    checked: boolean | 'indeterminate';
    children?: CheckboxItem[];
};


const CheckboxComponent = ({ node, onToggle }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if(inputRef.current){
            inputRef.current.indeterminate = node.checked === 'indeterminate'
        }
    }, [node.checked])
    return (
        <li>
            <input
                type='checkbox'
                ref={inputRef}
                checked={node.checked === true}
                onChange={(e) => {
                    const isChecked = (e.target as HTMLInputElement).checked;
                    return onToggle(node.id, isChecked)
                }}
            />
            <label>{node.name}</label>
            <ul>{node.children?.map(child => <CheckboxComponent node={child} onToggle={onToggle} />)}</ul>
        </li>
    )
}

const updatedChildren = (node, checked) => {
    const newNode = { ...node, checked };
    if (newNode.children) {
        newNode.children = newNode.children.map(child => {
            return updatedChildren(child, checked);
        })
    }

    return newNode;
};


const updateParent = (children: CheckboxItem[]) => {
    const allChildrenSelected = children.every(child => child.checked === true);
    const noChildrenSelected = children.every(child => child.checked === false);
    if (allChildrenSelected) return true;
    if (noChildrenSelected) return false;
    return 'indeterminate';
}

const toggleNode = (nodes: CheckboxItem[], id: number, checked: boolean): CheckboxItem[] => {
    return nodes.map(node => {
        if (node.id === id) {
            return updatedChildren(node, checked);
        }

        if (node.children) {
            const updatedChildren = toggleNode(node.children, id, checked);

            return {
                ...node,
                children: updatedChildren,
                // checked: updateParent(updatedChildren)
                checked: (() => {
                    const allChildrenSelected = updatedChildren.every(child => child.checked === true);
    const noChildrenSelected = updatedChildren.every(child => child.checked === false);
    if (allChildrenSelected) return true;
    if (noChildrenSelected) return false;
    return 'indeterminate';
                })()
            }
        }

        return node;
    })
}

function Checkboxes({
    defaultCheckboxData,
}: Readonly<{
    defaultCheckboxData: ReadonlyArray<CheckboxItem>;
}>) {
    const [data, setData] = useState([...defaultCheckboxData])

    const handleToggle = (id, checked) => {
        setData((prev) => toggleNode(prev, id, checked));
    };

    return (
        <div style={{ display: 'inline-flex' }}>
            <ul>
                {data && data.map((node) => {
                    return (
                        <CheckboxComponent key={node.id} node={node} onToggle={handleToggle} />
                    )
                })}
            </ul>
            <hr />
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}



export default function App() {

    return (
        <div>
            <Checkboxes defaultCheckboxData={checkboxesData} />
        </div>
    );
}
