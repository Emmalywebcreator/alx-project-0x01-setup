import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ( { 
    id, 
    name, 
    username, 
    email, 
    address, 
    phone, 
    website, 
    company } ) => {
    return(
        <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-600">@{username}</p>

            <div className="mt-4 space-y-1 text-gray-700">
                <p className="text-sm"><span className="font-medium">Email:</span>{email}</p>
                <p className="text-sm"><span className="font-medium">Phone:</span>{phone}</p>
                <p className="text-sm"><span className="font-medium">Website:</span>{website}</p>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-sm">{address.suite}, {address.street}, {address.city}, {address.zipcode}</p>
                <p className="text-xs text-gray-500">Lat: {address.geo.lat}, Lng: {address.geo.lng}</p>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Company</h3>
                <p className="text-sm">{company.name}</p>
                <p className="text-xs italic">{company.catchPhrase}</p>
            </div>
        </div>
    )
}


export default UserCard;