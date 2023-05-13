const Get = async () => {
    const response = await fetch('https://api.falcon.codes/page/data?key=home')
    const json = await response.json()

    return (
        <div>
            {
                json.sections[0].items.map(i => <div> {i.title}</div>)
            }

        </div>
    )
}

export default Get

