type InputComProps = {
    label?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    changeValue: (value: string) => void;
};

const InputCom: React.FC<InputComProps> = ({
    label = 'Label',
    type = 'text',
    placeholder = 'Default Placeholder',
    value = '',
    changeValue,
}) => {
    return (
        <div className="mb-[8px]">
            <label htmlFor="inputItem">{label}:</label>
            <div className="rounded-md mt-[12px] h-full" style={{ border: '1px solid #ccc' }}>
                <input className="w-full rounded-md h-full" type={type} value={value} placeholder={placeholder} onChange={(e) => changeValue(e.target.value)} />
            </div>
        </div>
    );
};

export default InputCom;
