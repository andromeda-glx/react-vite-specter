/* eslint-disable react/prop-types */
export default function Friend({ username, firstName, lastName, imgLink }) {
    console.log("img", imgLink);
    
    return (
        <li className="bg-gray-100 rounded-lg p-3 flex justify-start items-center gap-y-5 shadow-md cursor-pointer">
            <div className="w-[80px] h-[80px]">
                <img className="w-full h-full rounded-full object-cover object-center" src={imgLink} alt={`${username}'s profile picture`} />
            </div>
            <div className="">
                <h2 className="text-2xl font-semibold">@{username}</h2>
                <p>{firstName} {lastName}</p>
            </div>
        </li>
    )
}
