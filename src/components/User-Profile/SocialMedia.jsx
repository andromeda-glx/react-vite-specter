/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialMedia({ name, logo, link }) {
    return (
        <a href={link} target="_blank">
            <div className="flex items-center gap-x-1">
                <FontAwesomeIcon icon={logo} />
                <span>{name}</span>
            </div>
        </a>
    )
}
