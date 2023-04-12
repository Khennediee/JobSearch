const Jobs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedCompany, setSelectedCompany] = useState('');

    const filteredData = Data.filter(
        ({ title, location, company }) =>
            title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedLocation ? location === selectedLocation : true) &&
            (selectedCompany ? company === selectedCompany : true)
    );

    const locations = Array.from(new Set(Data.map((job) => job.location)));
    const companies = Array.from(new Set(Data.map((job) => job.company)));

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
    };

    const handleCompanyChange = (e) => {
        setSelectedCompany(e.target.value);
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Search Jobs"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select value={selectedLocation} onChange={handleLocationChange}>
                    <option value="">All Locations</option>
                    {locations.map((location) => (
                        <option value={location} key={location}>
                            {location}
                        </option>
                    ))}
                </select>
                <select value={selectedCompany} onChange={handleCompanyChange}>
                    <option value="">All Companies</option>
                    {companies.map((company) => (
                        <option value={company} key={company}>
                            {company}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                {filteredData.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
};