const typeLabel = (props) => {
    const {typeInfo} = props;
    const type = typeInfo.type;
    return (
        <a className="item" href>
            <div className={`ui ${type.name} horizontal label`}>{type.name}</div>
        </a>)
}

export default typeLabel;