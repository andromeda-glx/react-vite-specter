/* eslint-disable react/prop-types */
export default function Friend({ username, firstName, lastName, imgLink }) {
    console.log("img", imgLink);
    
    return (
        <li className="bg-gray-100 rounded-lg p-5 flex flex-col items-center gap-y-5 shadow-md">
            <div className="w-[100px] h-[100px]">
                <img className="w-full h-full rounded-full object-cover object-center" src={imgLink} alt={`${username}'s profile picture`} />
            </div>
            <div className="">
                <h2 className="text-2xl font-semibold">@{username}</h2>
                <p>{firstName} {lastName}</p>
            </div>
        </li>
    )
}
