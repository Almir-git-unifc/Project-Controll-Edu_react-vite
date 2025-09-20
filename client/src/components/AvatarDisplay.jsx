const blankAvatar = new URL('../assets/images/blankAvatar.png', import.meta.url);

const AvatarDisplay = ({ ticket }) => {
    return (
        <div className="avatar-container" >
            <div className="img-container" >
                <img src={ticket.avatar ? ticket.avatar : blankAvatar} alt={'Foto do ' + ticket.owner} />
            </div>
        </div>
    )
}
export default AvatarDisplay