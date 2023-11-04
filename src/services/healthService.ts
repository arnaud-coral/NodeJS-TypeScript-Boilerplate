class HealthService {
    public async check(): Promise<string> {
        return 'I\'m fine!';
    }
}

export default new HealthService();
