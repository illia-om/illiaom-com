import utilStyles from '../../styles/utils.module.css';

const PBlock = ({ text }: {text: string}) => {
    return (
        <div>
            <p className={utilStyles.bodyText}>{text}</p>
        </div>
    );
}

export default PBlock;