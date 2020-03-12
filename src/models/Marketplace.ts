export interface MarketplaceData {
  tag: string;
  mode: string;
  added_date: string;
  updated_date: string;
  calculated_date: string;
  data: {
    month: {
      mtd_revenue: string;
      mtd_fee_percent: string;
      mtd_fee_money: string;
      mtd_profit: string;
      mtd_growth_percent: string;
      mtd_growth_money: string;
      mtd_revenue_forecast: string;
    };
  };
  long_total_revenue: number;
  short_total_revenue: number;
  month_total_revenue: number;
  mp_fee: number;
}

const TITLE_MAP: { [t: string]: string } = {
  wb: 'Wildberries'
};

export default class Marketplace {
  private raw: MarketplaceData;

  constructor(data: MarketplaceData) {
    this.raw = data;
  }

  get isEmpty(): boolean {
    return !Object.keys(this.raw.data).length;
  }

  get title(): string {
    return TITLE_MAP[this.id];
  }

  get id(): string {
    return this.raw.tag;
  }

  get comissionPercentage(): number {
    return +this.raw.data.month.mtd_fee_percent;
  }

  get comissionMoney(): number {
    return +this.raw.data.month.mtd_fee_money;
  }

  get weekRevenue(): number {
    return this.raw.short_total_revenue;
  }

  get monthRevenue(): number {
    return +this.raw.data.month.mtd_revenue;
  }

  get yearRevenue(): number {
    return this.raw.long_total_revenue;
  }

  get isPositiveDynamic(): boolean {
    return +this.raw.data.month.mtd_growth_money > 0;
  }

  get currentTrend() {
    return {
      value: +this.raw.data.month.mtd_growth_money,
      percentage: +this.raw.data.month.mtd_growth_percent
    };
  }
}
