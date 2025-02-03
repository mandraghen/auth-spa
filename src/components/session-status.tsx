export const SessionStatus = ({ username }: { username: string }) => {
    return (
        <div className="mt-4">
            {username ? (
                <p>Logged in as {username}</p>
            ) : (
                <p>You are not logged in.</p>
            )}
        </div>
    );
};
