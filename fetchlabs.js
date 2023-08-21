function fetchLabResults() {
    const practiceId = 195900;
    const patientId = document.querySelector('input[name="patient-id"]');
    fetch(`https://api.preview.platform.athenahealth.com/v1/${practiceId}/chart${patientId}/labresults`).then(
        res => res.json()
    ).then(
        
    )
}