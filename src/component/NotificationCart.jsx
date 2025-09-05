export const Notification = () => {
    return (
        <div className="bg-white p-4 shadow-lg rounded-2xl w-64">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Notifications</h2>

            <div className="space-y-2">
                <div className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                    <h3 className="text-sm text-gray-700">🔔 New user signed up</h3>
                    <span className="text-xs text-gray-500">2 min ago</span>
                </div>

                <div className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                    <h3 className="text-sm text-gray-700">📩 You have 3 new messages</h3>
                    <span className="text-xs text-gray-500">10 min ago</span>
                </div>

                <div className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                    <h3 className="text-sm text-gray-700">⚡ Server restarted</h3>
                    <span className="text-xs text-gray-500">1 hr ago</span>
                </div>
            </div>
        </div>
    )
}

